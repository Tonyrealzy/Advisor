import handlebars from "handlebars";
import path from "path";
import fs from "fs";
import { MailProps } from "@/models/mail";

export const renderPasswordResetEmail = (props: MailProps) => {
  const filePath = path.resolve("src/templates/passwordReset.hbs");
  const source = fs.readFileSync(filePath, "utf-8");
  const template = handlebars.compile(source);
  return template(props);
};

export const renderAccountConfirmationEmail = (props: MailProps) => {
  const filePath = path.resolve("src/templates/signUp.hbs");
  const source = fs.readFileSync(filePath, "utf-8");
  const template = handlebars.compile(source);
  return template(props);
};
