
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Lock } from "lucide-react"

export default function ProfilePage() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">My Profile</h1>
        <p className="text-lg text-muted-foreground mt-2">
          View and manage your personal information.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold font-headline">Jane Doe</h2>
              <p className="text-muted-foreground">jane.doe@example.com</p>
              <Button variant="outline" className="mt-4">Change Photo</Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your personal details here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input id="name" defaultValue="Jane Doe" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                 <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input id="email" type="email" defaultValue="jane.doe@example.com" className="pl-10" />
                </div>
              </div>
              <Button>Save Changes</Button>
              <Separator />
               <div>
                 <h3 className="text-lg font-semibold">Change Password</h3>
                 <p className="text-sm text-muted-foreground mb-4">
                    For your security, please choose a strong password.
                 </p>
                 <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="current-password">Current Password</Label>
                         <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input id="current-password" type="password" className="pl-10" />
                        </div>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="new-password">New Password</Label>
                         <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input id="new-password" type="password" className="pl-10" />
                        </div>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm New Password</Label>
                         <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input id="confirm-password" type="password" className="pl-10" />
                        </div>
                    </div>
                 </div>
              </div>
              <Button>Update Password</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
