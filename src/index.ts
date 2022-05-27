// Add additional methods to console
// Configure environment file (.env)
import dotenv from "dotenv";
import express from "express";
import GUN from "gun";
import "./console";
import server from "./server";

dotenv.config();

// Start server
(async function(){
	const instance = await server(express());
	const gun = GUN({ web: instance });
}());
