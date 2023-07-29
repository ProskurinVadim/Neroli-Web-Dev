interface ITeamsData {
    id: number,
    attributes: {
        FullName: string | null,
        Category: string | null,
        Description: string | null,
        Facebook: string | null,
        WhatsApp: string | null,
        Instagram: string | null,
        Twitter: string | null,
        Threads: string | null,
        [x: string]: any;
        Photo: {
            data: {
                id: number,
                attributes: {
                    url: string
                    [x: string]: any;
                }
            } | null
        }
    }
}

interface INewsData {
    id: number,
    attributes: {
        Title: string,
        Views: string | null,
        publishedAt: string,
        Content: string | null,
        [x: string]: any;
        Photo: {
            data: Array<{
                id: number,
                attributes: {
                    formats: {
                        large: {
                            url: string,
                            [x: string]: any;
                        }
                        small: {
                            url: string,
                            [x: string]: any;
                        },
                        medium: {
                            url: string,
                            [x: string]: any;
                        }
                    }
                    [x: string]: any;
                }
            }> | null
        }
    }
}

interface IItemQuery {
    type?: string,
    price_min?: string,
    price_max?: string,
    property_type?: string,
    building?: string,
    beds? : string,
}
export type {
    ITeamsData,
    INewsData,
    IItemQuery
}