import request from 'supertest';
import app from '../app'; 

describe('CSV API Tests', () => {
  it('should upload a CSV file and return success', async () => {
    const uploadResponse = await request(app)
      .post('/api/files')
      .attach('file', 'src/tests/example-countries-pt.csv'); 
    expect(uploadResponse.status).toBe(200);
    expect(uploadResponse.body.message).toBe('CSV file uploaded and data stored');
  });

  it('should return error is file is not uploaded', async () => {
    const uploadResponse = await request(app)
      .post('/api/files')
      .attach('file', '');

    expect(uploadResponse.status).toBe(400);

    expect(uploadResponse.body.error).toBe('No file uploaded');
  });

  it('should search for users with matching query', async () => {
    const uploadResponse = await request(app)
      .post('/api/files')
      .attach('file', 'src/tests/example-countries-pt.csv');

    expect(uploadResponse.status).toBe(200);

    const searchResponse = await request(app).get('/api/users?q=Bulgaria');
    expect(searchResponse.status).toBe(200);
    expect(searchResponse.body).toHaveLength(2);
  });

  it('should respond with 404 for non-existent routes', async () => {
    const response = await request(app).get('/api/nonexistent');
    expect(response.status).toBe(404);
  });
});
