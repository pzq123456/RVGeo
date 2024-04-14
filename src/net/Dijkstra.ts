// def dijkstra_search(graph: WeightedGraph, start: Location, goal: Location):
//     frontier = PriorityQueue()
//     frontier.put(start, 0)
//     came_from: dict[Location, Optional[Location]] = {}
//     cost_so_far: dict[Location, float] = {}
//     came_from[start] = None
//     cost_so_far[start] = 0
    
//     while not frontier.empty():
//         current: Location = frontier.get()
        
//         if current == goal:
//             break
        
//         for next in graph.neighbors(current):
//             new_cost = cost_so_far[current] + graph.cost(current, next)
//             if next not in cost_so_far or new_cost < cost_so_far[next]:
//                 cost_so_far[next] = new_cost
//                 priority = new_cost
//                 frontier.put(next, priority)
//                 came_from[next] = current
    
//     return came_from, cost_so_far


// def reconstruct_path(came_from: dict[Location, Location],
//     start: Location, goal: Location) -> list[Location]:

// current: Location = goal
// path: list[Location] = []
// if goal not in came_from: # no path was found
// return []
// while current != start:
// path.append(current)
// current = came_from[current]
// path.append(start) # optional
// path.reverse() # optional
// return path