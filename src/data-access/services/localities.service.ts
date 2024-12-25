import {FetchedSuccessfully} from "@utils/reponse-text.utils"
import {
  LocalitiesInterface,
  LocalityRegionEnum,
} from "../models/localities.model"
import {localitiesStore} from "../store/localities.store"
import {ServerResponse} from "@utils/localities.utils"

export const getAllLocalities = () => {
  const sortByName = (a: LocalitiesInterface, b: LocalitiesInterface) =>
    a.name.localeCompare(b.name)

  const sortLocalities = (
    localities: LocalitiesInterface[]
  ): LocalitiesInterface[] =>
    localities.map((locality) => ({
      ...locality,
      children: locality.children
        ? sortLocalities(locality.children.sort(sortByName))
        : [],
    }))

  const sortedLocalities: LocalitiesInterface[] = sortLocalities(
    localitiesStore.sort(sortByName)
  )

  return ServerResponse(200, sortedLocalities, FetchedSuccessfully)
}

export const getLocality = async (name: string, region: LocalityRegionEnum) => {
  return await localitiesStore.find((locality) => {
    return locality.name === name && locality[region]
  })
}
