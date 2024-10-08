def numIslands(grid):
    # If grid is empty, return 0
    if not grid:
        return 0

    # Dimensions of the grid
    rows, cols = len(grid), len(grid[0])

    # Helper function for DFS traversal
    def dfs(r, c):
        # If we are out of bounds or at water, return
        if r < 0 or r >= rows or c < 0 or c >= cols or grid[r][c] == 'W':
            return
        # Mark the current landmass as visited by setting it to water
        grid[r][c] = 'W'

        # Explore all four directions (up, down, left, right)
        dfs(r - 1, c)  # Up
        dfs(r + 1, c)  # Down
        dfs(r, c - 1)  # Left
        dfs(r, c + 1)  # Right

    island_count = 0

    # Iterate through every cell in the grid
    for r in range(rows):
        for c in range(cols):
            # Start DFS if we find an unvisited landmass
            if grid[r][c] == 'L':
                dfs(r, c)  # Explore the entire island
                island_count += 1  # Increment island count

    return island_count

# Example usage:
grid1 = [
    ["L", "L", "L", "L", "W"],
    ["L", "L", "W", "L", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "W", "W", "W"]
]

grid2 = [
    ["L", "L", "W", "W", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "L", "W", "W"],
    ["W", "W", "W", "L", "L"]
]

print(numIslands(grid1))  # Output: 1
print(numIslands(grid2))  # Output: 3
