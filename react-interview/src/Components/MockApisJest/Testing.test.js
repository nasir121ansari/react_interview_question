import { fetchPosts } from './TestingApi';

jest.mock('./TestingApi', () => ({
    fetchPosts: jest.fn(), // Mock fetchPosts correctly
}));
describe('fetchPosts', () => {
    beforeEach(() => {
        fetchPosts.mockClear(); // Clear previous mocks before each test
    });
    test('fetches posts from JSONPlaceholder', async () => {
        const mockPosts = [
            { id: 1, title: 'Post 1', body: 'Content 1' },
            { id: 2, title: 'Post 2', body: 'Content 2' },
        ];
        fetchPosts.mockResolvedValueOnce(mockPosts);
        const result = await fetchPosts();
        expect(result).toEqual(mockPosts);
        expect(fetchPosts).toHaveBeenCalledTimes(1); // Ensure the function was called once
    });
});
