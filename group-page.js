(function renderGroupMembers() {
  const container = document.querySelector("#group-members");
  const members = Array.isArray(window.groupMembers) ? window.groupMembers : [];

  if (!container) return;

  function safeLink(value) {
    if (typeof value !== "string") return "";
    if (/^https?:\/\//i.test(value) || value.startsWith("./") || value.startsWith("/")) {
      return value;
    }
    return "";
  }

  function initials(name) {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(function firstCharacter(part) {
        return part.charAt(0).toUpperCase();
      })
      .join("");
  }

  function addProfileLink(parent, label, value) {
    const href = safeLink(value);
    if (!href) return;

    const link = document.createElement("a");
    link.href = href;
    link.textContent = label + " ↗";

    if (/^https?:\/\//i.test(href)) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    parent.appendChild(link);
  }

  const validMembers = members.filter(function hasRequiredFields(member) {
    return member && typeof member.name === "string" && typeof member.role === "string";
  });

  if (validMembers.length === 0) {
    const empty = document.createElement("p");
    empty.className = "member-empty";
    empty.textContent = "Member profiles will be added soon.";
    container.appendChild(empty);
    return;
  }

  validMembers.forEach(function createMemberCard(member) {
    const article = document.createElement("article");
    article.className = "member-card";

    const media = document.createElement("div");
    media.className = "member-media";

    const photo = safeLink(member.photo);
    if (photo) {
      const image = document.createElement("img");
      image.src = photo;
      image.alt = member.photoAlt || "Portrait of " + member.name;
      image.loading = "lazy";
      media.appendChild(image);
    } else {
      const fallback = document.createElement("span");
      fallback.className = "member-initials";
      fallback.setAttribute("aria-hidden", "true");
      fallback.textContent = initials(member.name);
      media.appendChild(fallback);
    }

    const content = document.createElement("div");
    content.className = "member-content";

    const role = document.createElement("p");
    role.className = "member-role";
    role.textContent = member.role;

    const name = document.createElement("h3");
    name.className = "member-name";
    name.textContent = member.name;

    if (member.nameZh) {
      const nameZh = document.createElement("span");
      nameZh.lang = "zh-Hans";
      nameZh.textContent = member.nameZh;
      name.appendChild(nameZh);
    }

    content.appendChild(role);
    content.appendChild(name);

    if (member.bio) {
      const bio = document.createElement("p");
      bio.className = "member-bio";
      bio.textContent = member.bio;
      content.appendChild(bio);
    }

    if (member.interests) {
      const interests = document.createElement("p");
      interests.className = "member-interests";
      interests.textContent = member.interests;
      content.appendChild(interests);
    }

    const links = document.createElement("div");
    links.className = "member-links";
    addProfileLink(links, "Homepage", member.homepage);
    addProfileLink(links, "GitHub", member.github);

    if (links.childElementCount > 0) {
      content.appendChild(links);
    }

    article.appendChild(media);
    article.appendChild(content);
    container.appendChild(article);
  });
})();
