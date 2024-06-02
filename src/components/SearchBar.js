import { Input } from 'antd';

const { Search } = Input;

export default function SearchBar({ handleSearch }) {
    return (
            <Search 
                placeholder="Search notes..." 
                enterButton 
                onChange={(e) => handleSearch(e.target.value)} 
            />  
    );
}
