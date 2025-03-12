import { MDtoHTML } from "./MDtoHTML.js";

const ObsidianLink = (props) => {
    let filepath = props.href;


    const convertObsidianMDtoHTML = async () => {
        let htmlLink = filepath.replace("Barrowvault", "BarrowvaultHTML");
        htmlLink = htmlLink.replace(".md", ".html");
        // Get MD file content
        const fileContent = await fetch(filepath);
        // Convert to HTML
        const html = await MDtoHTML(fileContent);

        return html;
    }
    
    return (
        <div>
            <a href={convertObsidianMDtoHTML()}>{props.children}</a>
        </div>
    );
}