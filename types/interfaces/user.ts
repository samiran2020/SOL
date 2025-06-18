import { ApiResponse } from '../types';

export interface User {
    id: string;
    name: string;
    phone: string;
    isActive?: boolean;
    createdAt?: Date | any;
}

