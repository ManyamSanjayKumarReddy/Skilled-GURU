import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectGroup,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from "@/components/ui/select"

export default function MockInterviews() {
  return (
    <section id="interviews" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Book a Mock Interview</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">
                Engineering Domain
              </label>
              {/* <Select id="domain">
                <option>Software Engineering</option>
                <option>Data Science</option>
                <option>Machine Learning</option>
                <option>DevOps</option>
              </Select> */}
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <Input type="date" id="date" />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Time Slot
              </label>
              {/* <Select id="time">
                <option>9:00 AM - 10:00 AM</option>
                <option>11:00 AM - 12:00 PM</option>
                <option>2:00 PM - 3:00 PM</option>
                <option>4:00 PM - 5:00 PM</option>
              </Select> */}
            </div>
            <Button type="submit" className="w-full">
              Book Interview
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

