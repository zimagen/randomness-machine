import { useRecoilState } from 'recoil'

export const useLocalStorageRecoilState = <T>(
  state: __Recoil.RecoilState<T>
): [T, (valOrUpdater: ((currVal: T) => T) | T) => void] => {
  const [value, setValue] = useRecoilState(state)

  return [
    value,
    (valOrUpdater: ((currVal: T) => T) | T) => {
      if (valOrUpdater instanceof Function) {
        const newValue = valOrUpdater(value)
        setValue(newValue)
        localStorage.setItem(state.key, JSON.stringify(newValue))
        return
      }
      setValue(valOrUpdater)
      localStorage.setItem(state.key, JSON.stringify(valOrUpdater))
    }
  ]
}
