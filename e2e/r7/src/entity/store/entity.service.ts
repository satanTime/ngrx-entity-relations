import {Store} from 'redux';

import {updateAddress} from './address/address.actions';
import {updateCompany} from './company/company.actions';
import {RootState, sAddress, sCompany, sUser} from './reducers';
import {updateUser} from './user/user.actions';

export class EntityService {
    constructor(protected readonly store: Store<RootState>) {}

    public changeUser(id: string): void {
        const entity = sUser()(this.store.getState(), id);
        if (!entity) {
            return;
        }

        const index = entity.name.match(/\d+$/);
        if (index) {
            this.store.dispatch(
                updateUser({
                    user: {
                        id,
                        changes: {
                            name: `Changed User ${parseInt(index[0], 10) + 1}`,
                        },
                    },
                }),
            );
        }
    }

    public changeCompany(id: string): void {
        const entity = sCompany()(this.store.getState(), id);
        if (!entity) {
            return;
        }

        const index = entity.name.match(/\d+$/);
        if (index) {
            this.store.dispatch(
                updateCompany({
                    company: {
                        id,
                        changes: {
                            name: `Changed Company ${parseInt(index[0], 10) + 1}`,
                        },
                    },
                }),
            );
        }
    }

    public changeAddress(id: string): void {
        const entity = sAddress()(this.store.getState(), id);
        if (!entity) {
            return;
        }

        const index = entity.name.match(/\d+$/);
        if (index) {
            this.store.dispatch(
                updateAddress({
                    address: {
                        id,
                        changes: {
                            name: `Changed Address ${parseInt(index[0], 10) + 1}`,
                        },
                    },
                }),
            );
        }
    }
}
