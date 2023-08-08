import useFresh from '../hook/useFresh'
import { Switch } from '@headlessui/react'

export default function MyToggle (): JSX.Element {
  const { isClaimsForm, handleClaimsForm } = useFresh()
  return (
    <Switch
      checked={isClaimsForm}
      onChange={handleClaimsForm}
      className={`${
        isClaimsForm ? 'bg-[#FF0D48]' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          isClaimsForm ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}