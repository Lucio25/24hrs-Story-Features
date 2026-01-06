import { useEffect, useState } from 'react';
import { Story, StoryList } from '../utils/types';
import { isExpired } from '../utils/time';

const STORAGE_KEY = 'stories';

export function useStories() {

    const [stories, setStories] = useState<StoryList>({});

    useEffect(() => {
        const storedStories = localStorage.getItem(STORAGE_KEY);
        if (storedStories) {
            setStories(JSON.parse(storedStories));
            const validStories = Object.fromEntries(
                Object.entries(JSON.parse(storedStories)).filter(
                    ([id, story]) => !isExpired(story as Story)
                )
            ) as StoryList;
             setStories(validStories);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(validStories));
           
        }
    }, []);
}