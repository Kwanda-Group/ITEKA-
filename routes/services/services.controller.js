import * as ServicesService from "./services.service.js";

export const create = async (req, res, next) => {
    try {
        if(!req.body){
            return res.status(400).json({ message: "Data is required" });
        }
        const service = await ServicesService.createService(req.body);
        res.status(201).json(service);
    } catch (error) {
        next(error);
    }
}

// get all services
export const getAll = async (req, res, next) => {
    try {
        const services = await ServicesService.getAllServices();
        return res.status(200).json(services);    
    }catch (error) {
        next(error);
    } 
}

// get services by institution
export const getByInstitution = async (req, res, next) => {
    try {
        if(!req.params.institutionId) {
            return res.status(400).json({ message: "Institution ID is required" });
        }
        const services = await ServicesService.getServicesByInstitution(req.params.institutionId);
        return res.status(200).json(services);
    }catch (error) {
        next(error);
    } 
}

// get services by branch
export const getByBranch = async (req, res, next) => {
    try {
        if(!req.params.branchId) {
            return res.status(400).json({ message: "Branch ID is required" });
        }
        const services = await ServicesService.getServicesByBranch(req.params.branchId);
        return res.status(200).json(services);
    } catch (error) {
        next(error);
    }
}

// get services by department
export const getByDepartment = async (req, res, next) => {
    try {
        if(!req.params.departmentId){
            return res.status(400).json({ message: "Department ID is required" });
        }
        const services = await ServicesService.getServicesByDepartment(req.params.departmentId);
        return res.status(200).json(services);
    }catch(error) {
        next(error);
    }
}

// search for services by name
export const searchByName = async (req, res, next) => {
    try {
        if(!req.query.name){
            return res.status(400).json({ message: "Name query parameter is required" });
        }
        const services = await ServicesService.searchServicesByName(req.query.name);
        return res.status(200).json(services);
    }catch (error) {
        next(error);
    }
}

// change the status of a service to inactive
export const deactivate = async (req, res, next) => {
    try {        
        if(!req.params.serviceId){
            return res.status(400).json({ message: "Service ID is required" });
        }
        const service = await ServicesService.deactivateService(req.params.serviceId);
        return res.status(200).json(service);
    }catch (error) {
        next(error);
    }
}

// update a service
export const update = async (req, res, next) => {
    try {
        if(!req.body || !req.params.serviceId){
            return res.status(400).json({ message: "Data and service ID are required" });
        }
        const service = await ServicesService.updateService(req.params.serviceId, req.body);
        return res.status(200).json(service);
    }catch (error) {
        next(error);
    }
}