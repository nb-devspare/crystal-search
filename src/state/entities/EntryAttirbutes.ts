import {Creator} from "./Creator";
import {Title} from "./Title";
import {Subject} from "./Subject";
import {EntryDate} from "./EntryDate";
import {RelatedIdentifier} from "./RelatedIdentifier";
import {EntryDescription} from "./EntryDescription";

export interface EntryAttributes {
    creators: Creator[];
    titles: Title[];
    publisher: string;
    publicationYear: string;
    source: string;
    subjects: Subject[];
    dates: EntryDate[];
    releatedIdentifiers: RelatedIdentifier[];
    descriptions: EntryDescription[];
    url: string;

}