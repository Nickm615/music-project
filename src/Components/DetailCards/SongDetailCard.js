import parse from 'html-react-parser';
import { createRichTextHtmlResolver, createAsyncRichTextHtmlResolver, linkedItemsHelper, urlResolver, contentItemResolver, contentItemHtml } from '@kentico/kontent-delivery';
import { nodeParser, asyncNodeParser } from '@kentico/kontent-delivery-node-parser';
import playButton from "../../assets/Spotify-Play-Button.png"

export default function SongDetailCard(props) {
    const richTextElement = props.lyrics;
    console.log(richTextElement)
    const resolvedRichText = createRichTextHtmlResolver().resolveRichText({
        element: richTextElement,
        urlResolver: (linkId, linkText, link) => {
            console.log(link)
            let url = '#unsupported-link-type';
            // Checks the content type of the linked content item
            if (link.type === 'performer') {
            url = `/performers/${link.codename}`;
            }
            return {
              linkUrl: url,
            };
          },
        linkedItems: linkedItemsHelper.convertLinkedItemsToArray(richTextElement.linkedItems),
        contentItemResolver: (itemId, contentItem) =>{
            console.log(contentItem)
            if(contentItem && contentItem.system.type === 'review_blurb') {
                return {
                    contentItemHtml: 
                    `<div className="review-blurb">
                        <h4>Nick's Rating:</h4>
                        <p>${contentItem.elements.nickSRating.value}</p>
                        <h4>Nick's Review:</h4>
                        <p>${contentItem.elements.nickSComments.value}</p>
                        
                    </div>`
                }
            }
    }
    })


    return (
            <div className="card">
                <h2>{props.title}</h2>
                <img src= {props.art + '?w=300&h=300'} alt = 'album image'/>
                <a href={props.link}>
                    <img style={{height:"50px", display:"block", margin:"auto"}} src = {playButton}/>
                </a>
                
                
                <div>
                    <h1>lyrics</h1>
                    {parse(resolvedRichText.html)}
                </div>
                
            </div>
    )
       
};