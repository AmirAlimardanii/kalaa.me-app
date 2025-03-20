<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <form action="">
      <Card class="mx-auto max-w-sm w-full">
        <CardHeader>
          <CardTitle class="text-2xl"> Login </CardTitle>
          <CardDescription>
            Enter your information below to login your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div class="grid gap-4">
            <div class="grid gap-2">
              <Label for="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                v-model="form.email"
                required
              />
            </div>
            <div class="grid gap-2">
              <div class="flex items-center">
                <Label for="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                v-model="form.password"
                required
              />
            </div>
            <Button type="button" variant="outline">
              <div class="flex items-center">
                <Icon name="radix-icons:github-logo" class="mr-1"></Icon>
                Github
              </div>
            </Button>
          </div>
        </CardContent>

        <CardFooter class="flex-col space-y-2">
          <Button type="submit" class="w-full"> Login </Button>

          <p class="text-sm">
            Dont have an account?
            <NuxtLink
              to="/auth/register"
              class="border-b text-gray-500 text-muted-foreground hover:text-primary"
              >Register
            </NuxtLink>
          </p>
        </CardFooter>
      </Card>
    </form>
  </div>
</template>

<script setup lang="ts">
type registerForm = {
  password: string;
  email: string;
};

const form = ref<registerForm>({
  password: "",
  email: "",
});
</script>
