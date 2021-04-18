function distance (a, b) {
    return Math.sqrt(squareDistance(a, b))
}

function squareDistance (a, b) {
    return (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)
}
  
function shortestPath (graph, srcNode, dstNode) {
    var q = [{ x: srcNode.x, y: srcNode.y, path: [srcNode], currentLength: 0, heuristic: 0 }]
    var visited = {}

    while (q.length > 0) {
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