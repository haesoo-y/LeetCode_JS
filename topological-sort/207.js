/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0);
  const graph = new Array(numCourses).fill(0).map((elem) => []);
  for (const [a, b] of prerequisites) {
    graph[b].push(a); // a를 가려면 b를 거쳐야함
    indegree[a] += 1;
  }

  // 위상 정렬
  const queue = [];
  let result = 0;
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }
  while (queue.length) {
    const now = queue.shift();
    result += 1;
    for (const course of graph[now]) {
      indegree[course] -= 1;
      if (indegree[course] === 0) {
        queue.push(course);
      }
    }
  }
  return result === numCourses;
};
