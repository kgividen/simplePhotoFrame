var args = arguments[0] || {};
$.fa.add($.rowIcon, args.icon);
$.rowIcon.color = args.iconColor;
$.title.text = args.title || '';
$.row.action = args.action;
$.row.dataType = args.dataType;
$.row.sectionView = args.sectionView || '';
$.row.sectionTitle = $.title;