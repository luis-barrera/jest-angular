/* eslint-disable @typescript-eslint/no-explicit-any */
import { MatDialogRef } from '@angular/material/dialog';

const mockMatDialogRef = {
    afterClosed: jest.fn(),
    close: jest.fn()
} as unknown as jest.Mocked<MatDialogRef<any>>;

/**
 * @description     Creates a Mock for MatDialog
 * @param T         Componente used on MatDialog
 * @returns         Provider
 */
export function MatDialogRefMock(T: any) {
    return {
        provide: MatDialogRef<typeof T>,
        useValue: mockMatDialogRef
    };
}
