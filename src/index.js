import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./context/modal-context-proj";
import { ThemeProvider } from "./context/theme-context-Api";
import "./index.css";

const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(
	// <React.StrictMode>
	<ThemeProvider>
		<ModalProvider>
			<App />
		</ModalProvider>
	</ThemeProvider>
	// </React.StrictMode>
);
