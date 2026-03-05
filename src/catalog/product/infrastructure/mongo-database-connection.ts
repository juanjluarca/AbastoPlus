import 'dotenv/config';
import mongoose from 'mongoose';
import { injectable } from 'inversify';
import { DatabaseConnection } from '../../../shared/domain/database-connection';

@injectable()
export class MongoDatabaseConnection implements DatabaseConnection {
    async connect(): Promise<void> {
        const uri = process.env.DATABASE;

        if (!uri) {
            throw new Error("DATABASE is not defined");
        }

        try {
            await mongoose.connect(uri, {
                dbName: "abasto-plus",
            });
            console.log("Successfully connected to MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            throw error;
        }
    }

    async disconnect(): Promise<void> {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
}