import { Career, CareerBase } from "../type/Career";
import { api } from "../services/api";

export function useApi() {

  async function addCareerApi(career: Career) {
    try {
      const response = await api.post("/", career);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async function getCareersApi(url: string = "") {
    try {
      const urlSuffix = url.slice(url.lastIndexOf('/') + 1)
      const response = await api.get(`${urlSuffix}`);
      return response
    } catch (error) {
      throw error;
    }
  }

  async function updateCareerApi(id: string, career: CareerBase) {
    try {
      const response = await api.patch(`${id}/`, career);
      return response
    } catch (error) {
      throw error;
    }
  }

  async function deleteCareerApi(id: string) {
    try {
      const response = await api.delete(`${id}/`);
      return response
    } catch (error) {
      throw error;
    }
  }

  return {
    addCareerApi,
    getCareersApi,
    updateCareerApi,
    deleteCareerApi
  }
}