import service from "../../models/services";

// create a new service
export const createService = async (data) => {
    const newService = new service(data);
    return await newService.save();
}

// get all services
export const getAllServices = async () => {
    return await service.find();
}

// get services per department
export const getServicesByDepartment = async (departmentId) => {
    return await service.find({ department_id: departmentId });
}

// get service by instution
export const getServicesByInstitution = async (institutionId) => {
    return await service.find({ institution_id: institutionId });
}

// get service by branch
export const getServicesByBranch = async (branchId) => {
    return await service.find({ branch_id: branchId });
}

// search for services by name
export const searchServicesByName = async (name) => {
    return await service.find({ name: { $regex: name, $options: 'i' } });
}

// update a service
export const updateService = async (serviceId, data) => {
    return await service.findByIdAndUpdate(serviceId, data, { new: true });
}

//change the status of a service to inactive
export const deactivateService = async (serviceId) => {
    return await service.findByIdAndUpdate(serviceId, { status: "inactive" }, { new: true });
}

// delete a service
export const deleteService = async (serviceId) => {
    return await service.findByIdAndDelete(serviceId);
}   