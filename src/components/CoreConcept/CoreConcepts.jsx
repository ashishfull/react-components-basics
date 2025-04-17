import CoreConcept from "./CoreConcept";
import Section from "../Section/Section";
import { CORE_CONCEPTS } from "../../data";

export default function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Time to get started!">
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
            </ul>
        </Section>
    );
}