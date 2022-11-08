import { nanoid } from "nanoid";
import "./style.css";

const genPassword = document.getElementById('random-password');
const showPassword = document.getElementById('show-password');

genPassword.addEventListener('click', () => {
  const randomPassword = nanoid();
  showPassword.innerHTML = randomPassword;
});