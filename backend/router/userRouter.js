import express from "express";
import { studentRegister,

    addNewAdmin,
    addNewTeacher,
    getAllTeachers,
    getUserDetails,
    login,
    logoutAdmin,
    logoutStudent} from "../controller/userController.js";
import {isAdminAuthenticated, isStudentAuthenticated} from "../middlewares/auth.js";
const router = express.Router();

router.post("/student/register", studentRegister)
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.get("/teachers", getAllTeachers);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/student/me", isStudentAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/student/logout", isStudentAuthenticated, logoutStudent);
router.post("/teacher/addnew", isAdminAuthenticated, addNewTeacher);

export default router;