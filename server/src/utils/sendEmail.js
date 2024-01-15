import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "",
        pass: "",
    },
});

const generateOTP = () => {
    const min = 100000; // Minimum 6-digit number
    const max = 999999; // Maximum 6-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(generateOTP());
