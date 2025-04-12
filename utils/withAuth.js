"use client";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const withAuth = (WrappedComponent) => {
  const ProtectedComponent = (props) => {
    const { isSignedIn, isLoaded } = useAuth();
    const router = useRouter();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      if (!isLoaded) return;

      if (!isSignedIn) {
        router.push("/sign-in");
      } else {
        setShowContent(true);
      }
    }, [isLoaded, isSignedIn, router]);

    if (!isLoaded || !showContent) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return ProtectedComponent;
};

export default withAuth;
