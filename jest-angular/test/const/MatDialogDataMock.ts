import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * @description This mock allows to bypass errors on components with a MaDialog
 */
export const MatDialogDataMock = {
    provide: MAT_DIALOG_DATA,
    useValue: {}
};
