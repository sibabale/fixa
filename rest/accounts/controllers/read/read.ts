import { Request, Response } from 'express';
import accounts from '../../data/accounts.json';

// Get all accounts
export const getAllAccounts = (req: Request, res: Response) => {
    try {
        res.status(200).json({
            success: true,
            data: accounts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};

// Get single account by ID
export const getAccountById = (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const account = accounts.find(acc => acc.id === id);

        if (!account) {
            return res.status(404).json({
                success: false,
                error: 'Account not found'
            });
        }

        res.status(200).json({
            success: true,
            data: account
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
