export interface timelineDataUnit {
    category: string;
    from: Date;
    to: Date;
    label: string;
    color: string;
}

export interface timelineOption {
    backgroundColor: string | null; // set to null for transparent
    titleColor: string;
    title: string | null;
    description: string | null;
}

export interface timelineProps {
    data: Array<timelineDataUnit>;
    options: timelineOption;
}