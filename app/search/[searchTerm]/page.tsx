import React from "react";

type PageProps = {
    params: {
        searchTerm: string;
    };
};

const SearchResult = async ({ params: { searchTerm } }: PageProps) => {
    const searchResults = await search(searchTerm);
    return <div>SearchResult</div>;
};

export default SearchResult;
