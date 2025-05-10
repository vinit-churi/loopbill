'use client'
// import {useToast} from "@/hooks/use-toast"
import {useState} from "react";
import {Tabs, TabsTrigger} from "@/components/ui/tabs";
import {TabsList} from "@/components/ui/tabs";
import {Label} from "@/components/ui/label";
import {Eye, EyeOff, Mail, Phone, Lock} from "lucide-react";
import {Checkbox} from "@/components/ui/checkbox";
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input";
import {RoleSelector} from "@/components/auth/signin/roleSelector";
import CollapsibleSection from "@/components/auth/signin/collapsible-section";
import {redirect} from "next/navigation";
// import {toast} from "sonner";

type AuthMode = "sign-in" | "sign-up";
type Role = "consumer" | "admin" | "salesperson" | "agent";

export function AuthForm() {
    // const { toast } = useToast();
    const [authMode, setAuthMode] = useState<AuthMode>("sign-in");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [selectedRole, setSelectedRole] = useState<Role>("consumer");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate confirm password for sign-up
        if (authMode === "sign-up" && password !== confirmPassword) {
            // toast({
            //     title: "Passwords do not match",
            //     description: "Please make sure your passwords match",
            //     variant: "destructive",
            // });
            return;
        }

        // Check if admin credentials are used
        if (email === "admin@gmail.com" && password === "123" && selectedRole === "admin") {
            // toast({
            //     title: "Admin Sign In Successful",
            //     description: "Redirecting to admin dashboard...",
            // });
            redirect("/admin");
            return;
        }

        // Navigate based on role
        if (authMode === "sign-in") {
            switch (selectedRole) {
                case "admin":
                    redirect("/admin");
                    break;
                case "salesperson":
                    redirect("/salesperson");
                    break;
                case "agent":
                    redirect("/agent");
                    break;
                case "consumer":
                    redirect("/");
                    break;
                default:
                    redirect("/");
                    break;
            }
        }

        // toast({
        //     title: `${authMode === "sign-in" ? "Sign In" : "Sign Up"} Attempted`,
        //     description: `Email: ${email}, Role: ${selectedRole}`,
        // });
        console.log(`${authMode} submitted with email: ${email}, password: ${password}, role: ${selectedRole}`);
    };

    const handleGoogleAuth = () => {
        // toast({
        //     title: "Google Authentication",
        //     description: `Continue with Google as ${selectedRole}`,
        // });

        // Navigate based on role
        switch (selectedRole) {
            case "admin":
                redirect("/admin");
                break;
            case "salesperson":
                redirect("/salesperson");
                break;
            case "agent":
                redirect("/agent");
                break;
            case "consumer":
                redirect("/");
                break;
            default:
                redirect("/");
                break;
        }

        console.log(`Google auth initiated with role: ${selectedRole}`);
    };

    const handleForgotPassword = () => {
        if (!email) {
            // toast({
            //     title: "Email Required",
            //     description: "Please enter your email address first",
            //     variant: "destructive",
            // });
            return;
        }

        // toast({
        //     title: "Password Reset Email Sent",
        //     description: `Instructions sent to ${email}`,
        // });
        console.log(`Password reset requested for: ${email}`);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const validateEmailOrPhone = (input: string) => {
        // Basic email and phone validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+?\d{10,15}$/;
        return emailPattern.test(input) || phonePattern.test(input);
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <Tabs
                defaultValue="sign-in"
                value={authMode}
                onValueChange={(value) => setAuthMode(value as AuthMode)}
                className="w-full"
            >
                <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="sign-in">Sign In</TabsTrigger>
                    <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
                </TabsList>

                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-pest-accent" />
                                Email or <Phone className="h-4 w-4 text-pest-accent" /> Phone Number
                            </Label>
                            <Input
                                id="email"
                                type="text"
                                placeholder="Enter your email or phone"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                pattern="^([^\s@]+@[^\s@]+\.[^\s@]+|\+?\d{10,15})$"
                                title="Please enter a valid email or phone number"
                                required
                                className="focus:border-pest-accent focus:ring-pest-accent"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="flex items-center gap-2">
                                <Lock className="h-4 w-4 text-pest-accent" />
                                Password
                            </Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="focus:border-pest-accent focus:ring-pest-accent pr-10"
                                />
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {authMode === "sign-up" && (
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                                    <Lock className="h-4 w-4 text-pest-accent" />
                                    Confirm Password
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="confirmPassword"
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        className="focus:border-pest-accent focus:ring-pest-accent pr-10"
                                    />
                                    <button
                                        type="button"
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                        onClick={toggleConfirmPasswordVisibility}
                                    >
                                        {showConfirmPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {authMode === "sign-in" && (
                            <>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="rememberMe"
                                            checked={rememberMe}
                                            onCheckedChange={() => setRememberMe(!rememberMe)}
                                        />
                                        <Label htmlFor="rememberMe" className="text-sm">Remember me</Label>
                                    </div>
                                    <Button
                                        variant="link"
                                        className="px-0 text-sm text-pest-accent hover:text-pest-dark"
                                        type="button"
                                        onClick={handleForgotPassword}
                                    >
                                        Forgot password?
                                    </Button>
                                </div>

                                <div className="pt-2">
                                    <CollapsibleSection title="Advanced Options">
                                        <div className="space-y-2">
                                            <Label>Select Role</Label>
                                            <RoleSelector
                                                selectedRole={selectedRole}
                                                onRoleChange={setSelectedRole}
                                            />
                                        </div>
                                    </CollapsibleSection>
                                </div>
                            </>
                        )}

                        <Button
                            type="submit"
                            className="w-full bg-pest-accent hover:bg-pest-dark"
                        >
                            {authMode === "sign-in" ? "Sign In" : "Sign Up"}
                        </Button>

                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                            </div>
                        </div>

                        <Button
                            type="button"
                            variant="outline"
                            className="w-full"
                            onClick={handleGoogleAuth}
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Google
                        </Button>
                    </div>
                </form>
            </Tabs>
        </div>
    );
}
