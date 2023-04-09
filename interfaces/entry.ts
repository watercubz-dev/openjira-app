

export interface Entry {
    _id: string;
    description: string;
    createdAt: number;
    status: EntryStatus //Pendig, in-progress - finished
}

export type EntryStatus = 'pending'| 'in-progress' | 'finished';