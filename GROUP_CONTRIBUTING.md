# Add your profile to the Group page

This page is also a small Git exercise for group members. Each member adds or
updates only their own profile and submits the change through a Pull Request.

## What to edit

Add one object to 'group-members.js'. Only 'name' and 'role' are required.

~~~javascript
{
  name: "Your Name",
  nameZh: "你的名字",
  role: "Research Intern",
  bio: "A concise one-sentence introduction.",
  interests: "Research topic · Research topic",
  photo: "./assets/members/your-github-username.webp",
  homepage: "https://your-homepage.example",
  github: "https://github.com/your-github-username",
},
~~~

Delete any optional line that does not apply. Do not add an invented homepage
or GitHub address.

If you add a portrait, place it under 'assets/members/'. Use an ASCII filename
such as 'your-github-username.webp', keep the image portrait or square, and keep
the file below 500 KB.

## Git exercise

1. Update your local 'main' branch.
2. Create a branch named 'member/<your-github-username>'.
3. Add your entry to 'group-members.js' and optionally add your portrait.
4. Open 'group.html' locally and check your name, links, and image.
5. Commit with a concise message such as 'Add Ada to group page'.
6. Push the branch and open a Pull Request.
7. In the Pull Request, briefly describe what you added and request review.

## Review checklist

- Edit only your own profile and portrait.
- Keep the introduction to one sentence.
- Check that homepage and GitHub links are correct.
- Confirm the page still loads when optional fields are omitted.
- Do not commit private contact details, credentials, or large files.
