
import { Input } from '@chakra-ui/react'; 
import { useState } from 'react'; 


export default function SearchBar({ onSearch }) {

    const [searchText, setSearchText] = useState(''); 

    // search every time the input changes 
    const handleInputChange = (event) => {
        setSearchText(event.target.value); 
        onSearch(searchText); 
    }


    return (

        <Input 
            maxW="600px" 
            borderWidth={2} borderRadius="full"
            placeholder="Search organizations" 
            value={searchText}
            onChange={handleInputChange}
        />
    )
}