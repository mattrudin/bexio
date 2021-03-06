export namespace ContactsStatic {
    export interface Contact {
        id?: number,
        nr?: string,
        contact_type_id?: number,
        name_1?: string,
        name_2?: string,
        salutation_id?: number,
        salutation_form?: number,
        title_id?: number,
        birthday?: string,
        address?: string,
        postcode?: string,
        city?: string,
        country_id?: number,
        mail?: string,
        mail_second?: string,
        phone_fixed?: string,
        phone_fixed_second?: string,
        phone_mobile?: string,
        fax?: string,
        url?: string,
        skype_name?: string,
        remarks?: string,
        language_id?: number
        is_lead?: boolean,
        contact_group_ids?: string,
        contact_branch_ids?: string,
        user_id?: number,
        owner_id?: number,
        updated_at?: string
    }

    export interface Type {
        id?: number,
        name?: string
    }

    export interface Sector {
        id?: number,
        name?: string
    }

    export interface Group {
        id?: number,
        name?: string
    }

    export interface Relation {
        id?: number,
        contact_id?: number,
        contact_sub_id?: number,
        description?: string,
        updated_at?: string
    }

    export interface AdditionalAddress {
        id?: number,
        name?: string,
        address?: string,
        postcode?: string,
        city?: string,
        country_id?: number,
        subject?: string,
        description?: string,
        default_bill_address?:boolean,
        default_correspondence_address:boolean,
        email?: string
    }

    export interface Salutation {
        id?: number,
        name?: string
    }

    export interface Title {
        id?: number,
        name?: string
    }

    export interface SearchParameters {
        id?: string,
        name_1?: string,
        name_2?: string,
        nr?: string,
        address?: string,
        mail?: string,
        mail_second?: string,
        postcode?: string,
        city?: string,
        country_id?: string,
        contact_group_ids?: Array<string>,
        contact_type_id?: string,
        updated_at?: string,
        user_id?: string,
        phone_fixed?: string,
        phone_mobile?: string,
        fax?: string,
        [index: string]: Array<string> | string | undefined
    }

    export interface TypeSearchParameters {
        name?: string,
        [index: string]: string | undefined
    }

    export interface SectorSearchParameters {
        name?: string,
        [index: string]: string | undefined
    }

    export interface GroupSearchParameters {
        name?: string,
        [index: string]: string | undefined
    }

    export interface RelationSearchParameters {
        contact_id?: string,
        contact_sub_id?: string,
        updated_at?: string,
        [index: string]: string | undefined
    }

    export interface AdditionalAddressSearchParameters {
        name?: string,
        address?: string,
        postcode?: string,
        city?: string,
        country_id?: string,
        subject?: string,
        email?: string,
        [index: string]: string | undefined
    }

    export interface SalutationSearchParameters {
        name?: string,
        [index: string]: string | undefined
    }

    export interface TitleSearchParameters {
        name?: string,
        [index: string]: string | undefined
    }

    export enum SortParameters {
        id = 'id',
        nr = 'nr',
        name_1 = 'name_1',
        updated_at = 'updated_at'
    }
}
