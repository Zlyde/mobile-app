import { describe, it, expect, vi } from 'vitest'
import { fetchBikes, fetchBikeById } from './BikeCall'

global.fetch = vi.fn()

const API_URL = 'http://localhost:5001/api/v1/bike'

describe('BikeCall Utilities', () => {
  afterEach(() => {
    vi.resetAllMocks()
  })

  describe('fetchBikes', () => {
    it('should fetch bikes successfully', async () => {
      const mockBikes = [{ id: 1 }, { id: 2 }]
      global.fetch.mockResolvedValue({
        json: () => Promise.resolve(mockBikes)
      })

      const result = await fetchBikes()
      expect(result).toEqual(mockBikes)
      expect(global.fetch).toHaveBeenCalledWith(API_URL)
    })

    it('should handle fetch error', async () => {
      global.fetch.mockRejectedValue(new Error('Fetch error'))

      const result = await fetchBikes()
      expect(result).toBeUndefined()
    })
  })

  describe('fetchBikeById', () => {
    it('should fetch bike by ID successfully', async () => {
      const mockBike = { id: 1, name: 'Roadster' }
      const bikeId = 1

      global.fetch.mockResolvedValue({
        json: () => Promise.resolve(mockBike),
      })

      const result = await fetchBikeById(bikeId)
      expect(result).toEqual(mockBike)
      expect(global.fetch).toHaveBeenCalledWith(`${API_URL}/${bikeId}`)
    })

    it('should handle fetchBikeById error', async () => {
      const bikeId = 9992432
      global.fetch.mockRejectedValue(new Error('Bike not found'))

      const result = await fetchBikeById(bikeId)
      expect(result).toBeUndefined()
    })
  })
})
