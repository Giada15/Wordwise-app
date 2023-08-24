import CountryItem from "./CountryItem"
import styles from "./CountryList.module.css"
import Spinner from "./Spinner"
import Message from "./Message"

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    )

  const countries = cities.reduce((acc, curr) => {
    if (!acc.map((el) => el.country).includes(curr.country))
      return [...acc, { country: curr.country, emoji: curr.emoji }]
    else return acc
  }, [])

  // let countries = []

  // cities.forEach((city) => {
  //   if (!countries.map((el) => el.country).includes(city.country))
  //     countries.push(city)
  // })

  return (
    <ul className={styles.coutryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  )
}

export default CountryList
