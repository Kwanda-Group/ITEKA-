// modules/institutions/instutition.controller.js
import * as InstitutionService from "./instutition.service.js";

/**
 * Create institution
 */
export const create = async (req, res, next) => {
  try {
    const institution = await InstitutionService.createInstitution(req.body);
    res.status(201).json({
      success: true,
      data: institution
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get all active institutions
 */
export const getAll = async (req, res, next) => {
  try {
    const institutions = await InstitutionService.getInstitutions();
    res.status(200).json({
      success: true,
      data: institutions
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get institution by ID
 */
export const getOne = async (req, res, next) => {
  try {
    const institution = await InstitutionService.getInstitutionById(
      req.params.id
    );

    if (!institution) {
      return res.status(404).json({ message: "Institution not found" });
    }

    res.status(200).json({
      success: true,
      data: institution
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Update institution
 */
export const update = async (req, res, next) => {
  try {
    const institution = await InstitutionService.updateInstitution(
      req.params.id,
      req.body
    );

    if (!institution) {
      return res.status(404).json({ message: "Institution not found" });
    }

    res.status(200).json({
      success: true,
      data: institution
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Soft delete institution (status → inactive)
 */
export const remove = async (req, res, next) => {
  try {
    const institution = await InstitutionService.deleteInstitution(
      req.params.id
    );

    if (!institution) {
      return res.status(404).json({ message: "Institution not found" });
    }

    res.status(200).json({
      success: true,
      message: "Institution deactivated successfully",
      data: institution
    });
  } catch (err) {
    next(err);
  }
};
