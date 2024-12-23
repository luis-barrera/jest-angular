import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

/**
 * @description Mock data passe through router
 */
export const ActivatedRouteMock = {
    provide: ActivatedRoute,
    useValue: {
        data: of({
            lists: {
                data: {
                    elements: {
                        data: [
                            {
                                listName: 'Lista 1',
                            }
                        ]
                    }
                }
            }
        }),
        snapshot: { data: { subtitle: 'Page 1' } }
    }
};
