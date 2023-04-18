import React, {useEffect, useState} from 'react';

import {ArtistType} from './types';
import {getArtists} from "../services/artistService";
import {Container} from "../components/Base/Container";
import SearchAppBar from "../components/Base/SearchAppBar";
import ArtistList from "../components/List/List";

export default function ArtistsPage() {
    const [dataLimit, setDataLimit] = useState<number>(10)
    const [searchField, setSearchField] = useState<string>('all')
    const [artistList, setArtistList] = useState<ArtistType>()

    const setSearchValue = (val: string) => {
        setSearchField(val);
        setDataLimit(10);
    }

    useEffect(() => {
        const scrollFun = () => {
            const windowHeight = window.innerHeight;
            const body = document.body;
            const html = document.documentElement;
            const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            const windowBottom = windowHeight + window.scrollY;
            if (windowBottom >= docHeight) {
                setDataLimit((prev) => prev + 10)
            }
        }
        window.addEventListener("scroll", scrollFun);
        return () => {
            window.removeEventListener("scroll", scrollFun);
        };
    }, [])
    useEffect(() => {
        if (searchField.length < 2) {
            return;
        }
        getArtists({dataLimit, term: searchField}).then(res => setArtistList(res.data))
    }, [dataLimit, searchField])
    return (
        <>
            <SearchAppBar setSearchField={setSearchValue}/>
            <Container>
                <ArtistList artistList={artistList}/>
            </Container>
        </>
    );
}
