export default function Restaurant() {
  const [search, setSearch] = useState('');
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenuOptions();
    return () => {};
  }, [getMenuOptions]);

  const getMenuOptions = useCallback(async () => {
    const response = await axios.get('/api/restaurant/1/menu-options');
    setMenu(response.data);
    setLoading(false);
  }, [setLoading]);

  const onChangeText = useCallback(
    (text) => {
      setSearch(text);
      let filteredResults = [...menu];
      if (text.length > 0) {
        filteredResults = menu.filter((option) => option.name.includes(text));
      }
      setFilteredMenu(filteredResults);
    },
    [menu, setFilteredMenu],
  );

  return (
    <Container>
      <SearchContainer>
        <SearchBar value={search} onChangeText={onChangeText} />
      </SearchContainer>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <FlatList
          data={filteredMenu}
          renderItem={({ item }) => (
            <Meal>
              <Image source={item.image} />
              <Title>{item.name}</Title>
              <Price>{item.price}</Price>
            </Meal>
          )}
        />
      )}
    </Container>
  );
}
