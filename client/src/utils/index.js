//This is a helper function where we randomly generates prompt and implement the download button
import FileSaver from 'file-saver';

import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * 
    surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt===prompt) return getRandomPrompt(prompt)        
    return randomPrompt;
}

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`)
}