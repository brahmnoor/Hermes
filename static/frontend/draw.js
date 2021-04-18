const width = 600;
const height = 340;

var points = []
var globalRectangles = []

var centerToRect = {}

function lineIntersects (p0, p1, p2, p3) {
    var s1x = p1.x - p0.x
    var s1y = p1.y - p0.y
    var s2x = p3.x - p2.x
    var s2y = p3.y - p2.y

    var s = (-s1y * (p0.x - p2.x) + s1x * (p0.y - p2.y)) / (-s2x * s1y + s1x * s2y)
    var t = (s2x * (p0.y - p2.y) - s2y * (p0.x - p2.x)) / (-s2x * s1y + s1x * s2y)

    return s > 0 && s < 1 && t > 0 && t < 1
}

function linePolygonIntersection (src, dst, c) {
    // var c = centerToRect[o];
    // console.log(c);
    if (c.includes(src) && c.includes(dst)) {
        return false;
    }
    for (var k = 0; k < c.length; k++) {
        if (lineIntersects(c[k], c[(k + 1) % c.length], src, dst)) {
            return true;
        }
    }
    return false;
}

function directPath (src, dst) {
    return globalRectangles
        .filter(o => src !== o)
        .every(o => !linePolygonIntersection(src, dst, o))
}

function buildGraph () {
    // Add edge from each vertex to all visible vertex
    const allVertices = points

    // console.log(centerToRect);

    globalRectangles.push([{x : start_pos.x, y : start_pos.y}, {x : end_pos.x, y : end_pos.y}]);


    const graph = {}
    globalRectangles.forEach(srcPoly => {
        srcPoly.forEach(srcP => {
        allVertices
            .filter(c => c.x !== srcP.x || c.y !== srcP.y)
            .forEach(c => {
            if (directPath(srcP, c)) {
                const key = `${srcP.x} ${srcP.y}`
                if (graph[key] == null) {
                graph[key] = []
                }
                graph[key].push(c)
            }
            })
        })
    })
    return graph
}

function drawBackground (stage, imageUrl) {
    const background = PIXI.Sprite.fromImage(imageUrl);
    background.width = 600;
    background.height = 340;
    stage.addChild(background);
}

function drawRectangles (stage, rectangles) {
    rectangles.forEach(rectangle => {


        var newRectangle = [];

        for (let i = 0; i < 4; i++) {
            if (i == 0) {
                points.push({x : rectangle.vertices[i].x*width - 10, y : rectangle.vertices[i].y*height - 10});
                //  console.log({x : rectangle.vertices[0].x*width, y : rectangle.vertices[0].y*height});
                newRectangle.push({x : rectangle.vertices[i].x*width - 10, y : rectangle.vertices[i].y*height - 10});
                // console.log(newRectangle);
            }
            if (i == 1) {
                points.push({x : rectangle.vertices[i].x*width + 10, y : rectangle.vertices[i].y*height - 10});
                newRectangle.push({x : rectangle.vertices[i].x*width + 10, y : rectangle.vertices[i].y*height - 10});
            }
            if (i == 2) {
                points.push({x : rectangle.vertices[i].x*width + 10, y : rectangle.vertices[i].y*height + 10});
                newRectangle.push({x : rectangle.vertices[i].x*width + 10, y : rectangle.vertices[i].y*height + 10});
            }
            if (i == 3) {
                points.push({x : rectangle.vertices[i].x*width - 20, y : rectangle.vertices[i].y*height + 20});
                newRectangle.push({x : rectangle.vertices[i].x*width - 10, y : rectangle.vertices[i].y*height + 10});
            }
        }
        globalRectangles.push(newRectangle);


        var line = new PIXI.Graphics()
        line.lineStyle(1, 0xffffff)
        line.moveTo(rectangle.vertices[0].x*width, rectangle.vertices[0].y*height)
        for (let i = 0; i < 4; i++) {
            const pt = rectangle.vertices[(i + 1) % 4]
            line.lineTo(pt.x*width, pt.y*height)
        }
        stage.addChild(line)
        })
}

function drawGraph (stage, graph) {

    // console.log(globalRectangles);

    Object.entries(graph).forEach(([src, dst]) => {
      dst.forEach(d => {
        const line = new PIXI.Graphics()
        line.lineStyle(2, "#009688")
        line.alpha = 0.1
        const x = parseInt(src.split(' ')[0])
        const y = parseInt(src.split(' ')[1])
        line.moveTo(x, y)
        line.lineTo(d.x, d.y)
        stage.addChild(line)
      })
    })
  }
  
  function drawPath (stage, path) {
    var line = new PIXI.Graphics()
    line.lineStyle(3, "#150578")
    line.moveTo(path[0].x, path[0].y)
    for (let k = 1; k < path.length; k++) {
      line.lineTo(path[k].x, path[k].y)
    }
    stage.addChild(line)
  }

var clicksSoFar = 0;

var start_pos = {x: 0, y: 0};
var end_pos = {x : 0, y : 0};

function distance (a, b) {
    return Math.sqrt(squareDistance(a, b))
}

function squareDistance (a, b) {
    return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)
}
  
function shortestPath (graph, srcNode, dstNode) {
    console.log(srcNode);
    var q = [{ x: srcNode.x, y: srcNode.y, path: [srcNode], currentLength: 0, heuristic: 0 }]
    console.log(q[0]);
    console.log(q.length);
    console.log(graph);
    var visited = {}

    while (q.length > 0) {
        console.log(q);
        q.sort((a, b) => a.heuristic - b.heuristic) // this should be a queue
        const el = q.shift()

        if (directPath(dstNode, el)) {
        return [...el.path, dstNode]
        }
        visited[`${el.x} ${el.y}`] = true

        const successors = graph[`${el.x} ${el.y}`]
        if (!successors) {
        continue
        }
        successors
        .filter(succ => !visited[`${succ.x} ${succ.y}`])
        .forEach(succ => {
            const distToSucc = distance(succ, el)
            const newPath = el.path.slice()
            const currentLength = el.currentLength + distToSucc
            const heuristic = currentLength + distance(succ, dstNode)
            newPath.push({ x: succ.x, y: succ.y })
            q.push({ x: succ.x, y: succ.y, path: newPath, currentLength, heuristic })
        })
    }
}

function pointerDown(stage, event) {
    // console.log(clicksSoFar);
    // console.log(event);
    // console.log(event.data.getLocalPosition(stage));
    var fillColor;
    if (clicksSoFar == 0) {
        fillColor = "#254441";
        start_pos.x = event.data.getLocalPosition(stage).x;
        start_pos.y = event.data.getLocalPosition(stage).y;
        points.push(start_pos);
        document.getElementById("helper").innerText = "Now select where you want to go, and we'll recommend the route!";
    }
    else if (clicksSoFar == 1) {
        fillColor = "#DB162F";
        end_pos.x = event.data.getLocalPosition(stage).x;
        end_pos.y = event.data.getLocalPosition(stage).y;
        document.getElementById("helper").innerText = "Click anywhere on the Canvas to make the magic happen.";
        points.push(end_pos);
    }
    else {
        // console.log(points);
        const graph = buildGraph();
        drawGraph(stage, graph);
        const path = shortestPath(graph, start_pos, end_pos);
        drawPath(stage, path);
    }
    var flag = new PIXI.Text(
        '\uf041',
        {
            fill: fillColor,
            font: '20px fontawesome'});
    // flag.anchor.set(event.data.getLocalPosition(stage).x, event.data.getLocalPosition(stage).y);
    flag.anchor.set(0.5, 1);
    flag.x = event.data.getLocalPosition(stage).x;
    flag.y = event.data.getLocalPosition(stage).y;
    stage.addChild(flag);
    clicksSoFar++;
}