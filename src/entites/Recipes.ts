export class Recipes {
    id!: string;
    title!: string;
    stateId!: string;
    description!: string;
    image!: string;
    isFavourite!: boolean;
    reviews!: Review[];
    constructor() {
        this.reviews = [];
        this.isFavourite = false;

    }
}

export class Review {
    reviewerName!: string;
    comment!: string;
    rating!: number;
}